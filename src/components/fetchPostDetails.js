import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FetchPostAction } from "../redux/action/FetchPostAction";

//material ui
import Button from "@material-ui/core/Button";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

const FetchPostDetails = (props) => {
  //state defined here
  const [posts, setPosts] = useState(0);
  const [loading] = useState("loading plaese wait ...");
  const dispatch = useDispatch();

  //using UseEffect and Set Inteval for time fetching
  useEffect(() => {
    setInterval(() => {
      dispatch(FetchPostAction(posts));
      setPosts(posts + 1);
    }, 10000);
  }, [posts, dispatch]);

  //fetch data
  const data = useSelector((state) => {
    return state.posts;
  });
  console.log("data", data);
  
  // create columns data
  const columns = [
    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "URL",
      accessor: "url",
    },
    {
      Header: "Created_at",
      accessor: "created_at",
    },
    {
      Header: "Action",
      Cell: (props) => {
        return (
          <Link to={{ pathname: "/original-data", data: props.original }}>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => console.log(props)}
            >
              Row Details
            </Button>
          </Link>
        );
      },
    },
  ];
  return (
    <div>
      {/* ========================== using react table 6================================= */}
      <ReactTable
        data={data}
        columns={columns}
        noDataText={loading}
        showPageSizeOptions={false}
        defaultPageSize={20}
      />
    </div>
  );
};

export default FetchPostDetails;
