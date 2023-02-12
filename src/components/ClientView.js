import React from 'react'
import './ClientView.css'
function ClientView() {
  return (
    <>
               <div>
                    <div class="Header">
                         <h1>CLIENT PROFILE</h1>
                     </div>
                     <div class="Containers">
                         <div class="Container1">
                     <     div class="Header">
                               <h1>Client Details</h1>
                           </div>
                            <div class="Name">
                                <p><h2>Name: Bhupendra Manoj Sharma</h2></p>
                                <br />
                                <p><h2>Company name: Satish Pharma Tech</h2></p>
                                <br />
                                <p><h2>Designation: Manager</h2></p>
                                <br />
                                <p><h2>Additional details: None</h2></p>
                         </div>                      
                  </div>

                  <div class="Container1">
                     <div class="Header">
                         <h1>Adderss Details</h1>
                     </div>
                     <div class="Name">
                        <p><h2>Country: India</h2></p>
                        <br />
                        <p><h2>State: Maharashtra</h2></p>
                        <br />
                        <p><h2>City: Mumbai</h2></p>
                        <br />
                        <p><h2>Pin: 401-203</h2></p>
                        <br />
                        <p><h2>Additional: None</h2></p>
                    </div>  
                </div>

                <div class="Container1">
                     <div class="Header">
                         <h1>Contact Details</h1>
                     </div>
                     <div class="Name">
                        <p><h2>Email id: abc.def@gmail.com</h2></p>
                        <br />
                        <p><h2>Contact no: 0123456789</h2></p>
                        <br />
                        <p><h2>Alternate no: 0123456789</h2></p>
                        <br />
                    </div>  
                </div>
           </div>
       </div>
  </>
  )
}

export default ClientView
