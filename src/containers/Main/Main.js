import React, {useEffect} from "react";
import {connect} from 'react-redux';
import "./Main.scss"

//Components
import Sidebar from "../Sidebar/SideBar";
import NavbarMain from "../../components/Navbar";
import TableMain from "../Table/TableMain";
import ActionBar from "../ActionBar/ActionBar";
import NewOrder from "../NewOrder/NewOrder";
import {fetchTable} from "../../redux/Table/TableAction";

const Main = ({fetchTable}) =>{


        useEffect(() => {
                fetchTable();
        }, [fetchTable]);

        return(
            <>
                <Sidebar/>
                <TableMain />
                <ActionBar/>
            </>
        )
};

export default connect(null, {fetchTable})(Main)
