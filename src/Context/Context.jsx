import React from "react";

const ActiveContext = React.createContext({
  isActive:true,
  onTap: ()=>{}
});

export default ActiveContext;