import {Component} from "react";
import NatureImage from "../../../assets/images/nature.jpg";
import "./AssetTable.css";
export default class AssetTable extends Component{
    
render(){
    let title="Table";
    let styles={color:"red",fontWeight:700,borderBottom:'1px solid'}
    return(
        <div>
            {title}
            <img src={NatureImage} alt="nature"/>
            <p style={styles}>class componnt asset table</p>
        </div>
    )
}
}