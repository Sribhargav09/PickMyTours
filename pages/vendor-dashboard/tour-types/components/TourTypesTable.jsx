import { use, useEffect, useState } from "react";
import Pagination from "../../common/Pagination";
import ActionsButton from "./ActionsButton";
import { useRouter } from "next/router";
import Router from "next/router";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import tourTypeService from "../../../../services/tour-type.service";





const TourTypesTable = ({tourTypesData}) => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const [id, setId] = useState(null);
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = (id) => {
    setId(id)
    setOpen(true);
  };

  const deleteRecord = () => {
    tourTypeService.delete(id)
          .then(response => {
            
            location.reload();
            console.log(response.data);
            setOpen(false);

          })
          .catch(e => {
            console.log(e);
          });
  }

  const handleClose = () => {
    setOpen(false);
  };



  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabItems = [
    "All Tour Types",
    // "Completed",
    // "Processing",
    // "Confirmed",
    // "Cancelled",
    // "Paid",
    // "Unpaid",
    // "Partial Payment",
  ];

  return (
    <>
      <div className="tabs -underline-2 js-tabs">
        <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
          {tabItems.map((item, index) => (
            <div className="col-auto" key={index}>
              <button
                className={`tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button ${
                  activeTab === index ? "is-tab-el-active" : ""
                }`}
                onClick={() => handleTabClick(index)}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
        {/* End tabs */}

        <div className="tabs__content pt-30 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <div className="overflow-scroll scroll-bar-1">
              <table className="table-4 -border-bottom col-12">
                <thead className="bg-light-2">
                  <tr>
                    <th>
                      <div className="d-flex items-center">
                        <div className="form-checkbox ">
                          <input type="checkbox" name="name" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check" />
                          </div>
                        </div>
                      </div>
                    </th>
                    <th>Name</th>
                    <th>Photo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* End theade */}
                <tbody>
                  {tourTypesData && tourTypesData.map((data) => { 
                  return <tr>
                    <td>
                      <div className="d-flex items-center">
                        <div className="form-checkbox ">
                          <input type="checkbox" name="name" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check" />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="text-blue-1 fw-500">{data.name}</td>

                    <td><img width="100px" height="100px" src={data.photo[0]} /></td>

                    <td>
                        <Button  onClick={() => Router.push(`add-tour-type?id=${data?._id}`)} endIcon={<EditOutlined />}></Button>
                        <Button  onClick={() => handleClickOpen(data._id)} endIcon={<DeleteOutline />}></Button>
                      </td>


                    
                  </tr>
                  })}
                  {/* End tr */}
                </tbody>
                {/* End tbody */}
              </table>
            </div>
          </div>
        </div>
      </div>

      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You want to delete the record
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button class="btn btn-success" onClick={deleteRecord} autoFocus>Yes</Button>
          <Button class="btn btn-danger" onClick={handleClose}>
            No
          </Button>
        </DialogActions>
      </Dialog>
      {/* <Pagination /> */}
    </>
  );
};

export default TourTypesTable;
