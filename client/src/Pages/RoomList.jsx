// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import RoomDetails from './RoomDetails'; // Adjust import path as necessary
// import Loader from '../components/Loader';
// import Error from './Error';
// import moment from "moment";
// import { DatePicker,Space } from "antd";
// import Navbar from './Navbar';
// import Footer from './Footer';
// const { RangePicker } = DatePicker;

// const RoomList = () => {
//   const [rooms, setRooms] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [fromdate, setfromdate] = useState(null); // Updated state variable names
//   const [todate, settodate] = useState(null); // Updated state variable names
//   const[duplicaterooms,setduplicaterooms]=useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const data = (await axios.get("http://localhost:3000/api/rooms/getallrooms")).data;
//         setRooms(data);
//         setduplicaterooms(data)
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   function filterByDate(dates) {
//     setfromdate(moment(dates[0]).format('DD-MM-YYYY')); // Corrected date formatting
//     settodate(moment(dates[1]).format('DD-MM-YYYY')); // Corrected date formatting
//     var temprooms=[]
//     var availability=false
//     for(const room of duplicaterooms)
//       {
//         if(room.currentbookings.length>0){
// for( const booking of room.currentbookings){
//   if(!moment(moment(dates[0]).format('DD-MM-YYYY')).isBetween(booking.fromdate,booking.todate)
// && !moment(moment(dates[1]).format('DD-MM-YYYY')).isBetween(booking.fromdate,booking.todate)
// ){
//   if(
//     moment(dates[0]).format('DD-MM-YYYY')!==booking.fromdate &&
//     moment(dates[0]).format('DD-MM-YYYY')!==booking.todate &&
//     moment(dates[1]).format('DD-MM-YYYY')!==booking.fromdate &&
//     moment(dates[1]).format('DD-MM-YYYY')!==booking.todate 

//   )
//   {
//     availability=true;
//   }
// }
// }

//         }
//         if(availability==true || room.currentbookings.length==0)
// {
//   temprooms.push(room)
// }     
// setRooms(temprooms)

// }
//   }

//   return (
//     <div>
//       <Navbar/>
//       <div className='room-list-container'>
//         <div className='background-image'>
//           <div className='content-container'>
//             <div className='row'>
//               <div className='col-md-8 text-center mt-4'>
//                 <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
//               </div>
//               <div className='col-md-5'>
//                 <input type="text" className='form-control' placeholder='search rooms'>

//                 </input>
//               </div>
//               <select >
// <option value="all">All</option>
// <option value="delux">Delux</option>
// <option value="non-delux">Non-Delux</option>


//               </select>
//             </div>
//             <div className='row justify-content-center'>
//               {loading ? (
//                 <Loader className="text-white" />
//               ) : rooms.length > 0 ? (
//                 rooms.map((room, index) => (
//                   <div key={index} className='col-md-6 mt-2'>
//                     <RoomDetails room={room} fromdate={fromdate} todate={todate} />
//                   </div>
//                 ))
//               ) : (
//                 <Error className="text-white" />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// }

// export default RoomList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RoomDetails from './RoomDetails'; // Adjust import path as necessary
import Loader from '../components/Loader';
import Error from './Error';
import moment from 'moment';
import { DatePicker, Space } from 'antd';
import Navbar from './Navbar';
import Footer from './Footer';
import './room.css'; // Import the CSS file for styling

const { RangePicker } = DatePicker;

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fromdate, setFromdate] = useState(null);
  const [todate, setTodate] = useState(null);
  const [duplicaterooms, setDuplicaterooms] = useState([]);
  const [searchkey, setSearchkey] = useState('');
  const [type, setType] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = (await axios.get("http://localhost:3000/api/rooms/getallrooms")).data;
        setRooms(data);
        setDuplicaterooms(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterByDate = (dates) => {
    setFromdate(moment(dates[0]).format('DD-MM-YYYY'));
    setTodate(moment(dates[1]).format('DD-MM-YYYY'));
    const temprooms = [];
    for (const room of duplicaterooms) {
      let availability = true;
      for (const booking of room.currentbookings) {
        if (
          moment(dates[0]).isBetween(booking.fromdate, booking.todate, null, '[]') ||
          moment(dates[1]).isBetween(booking.fromdate, booking.todate, null, '[]') ||
          moment(booking.fromdate).isBetween(dates[0], dates[1], null, '[]') ||
          moment(booking.todate).isBetween(dates[0], dates[1], null, '[]')
        ) {
          availability = false;
          break;
        }
      }
      if (availability) temprooms.push(room);
    }
    setRooms(temprooms);
  };

  const filterBySearch = () => {
    const temprooms = duplicaterooms.filter(room => room.name.toLowerCase().includes(searchkey.toLowerCase()));
    setRooms(temprooms);
  };

  const filterByType = (e) => {
    setType(e);
    if (e!== 'all') {
      const temprooms = duplicaterooms.filter(room => room.type.toLowerCase() === e.toLowerCase());
      setRooms(temprooms);
    } else {
      setRooms(duplicaterooms);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="room-list-container">
        <div className="background-image">
          <div className="content-container">
            <div className="row">
              <div className="col-md-8 text-center mt-4">
                <Space direction="vertical" size={12}>
                  <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
                </Space>
              </div>
              <div className="col-md-5 mt-2">
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search rooms"
                  value={searchkey}
                  onChange={(e) => { setSearchkey(e.target.value); }}
                  onKeyUp={filterBySearch}
                />
              </div>
              <div className="col-md-3 mt-2">
                <select className="form-select" value={type} onChange={(e)=>{filterByType(e.target.value)}}>
                  <option value="all">All</option>
                  <option value="delux">Delux</option>
                  <option value="non-delux">Non-Delux</option>
                </select>
              </div>
            </div>
            <div className="row justify-content-center">
              {loading ? (
                <Loader className="text-white" />
              ) : rooms.length > 0 ? (
                rooms.map((room, index) => (
                  <div key={index} className="col-md-6 mt-2">
                    <RoomDetails room={room} fromdate={fromdate} todate={todate} />
                  </div>
                ))
              ) : (
                <Error className="text-white" />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RoomList;
