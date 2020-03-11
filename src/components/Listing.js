import React from "react";
import {
  Table,
  Container,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
// import AddBusiness from "../components/AddBusiness";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from 'react-router-dom'



const Listing = props => {


    return (
        <Container maxWidth="lg" className="businessListing-container">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        { document.cookie === "loggedIn=true" ? (<TableCell>Delete</TableCell>):(null)}
                    </TableRow>
                </TableHead>
                    <TableBody>
                        {props.business.map((business, idx) => (
                        <TableRow key={business.id}>
                            <TableCell><Link to={`/business/${business.id}`}>{business.Name}</Link></TableCell>
                        <TableCell>{business.Description}</TableCell>
                            <TableCell>{business.Hours}</TableCell>
                            <TableCell>{business.Address}</TableCell>
                            {document.cookie === "loggedIn=true" ? (
                                    <TableCell>
                                        <DeleteIcon
                                            onClick = {() => props.removeBusiness(idx)}
                                            className="icon text-red" /> 
                                    </TableCell>     
                                    ):(null)}
                        </TableRow>
                        ))}    
                    </TableBody>
            </Table>
        </Container>

    )
};

export default Listing;