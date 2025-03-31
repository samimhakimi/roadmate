import tyre from "../assets/images/roadmateVan.jpeg";


export default function Main() {
    return (
  
      <div style={{ 
        textAlign: "center", 
        padding: "40px", 
        backgroundColor: "#f4f4f4", 
        borderRadius: "10px", 
        maxWidth: "800px", 
        margin: "auto", 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" ,
        marginTop: 40,
        marginBottom: 40,  
      }}> 
    <img style={{width: 600, height:400, borderRadius: 20}} src={tyre}></img>
      </div>
   
 
    );
  }
  