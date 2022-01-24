﻿



function CustomerDetails({customer}) {
    
    return (
        <div>
            
            <div className={"card"} style={{ width: "59rem", marginRight: "1rem", }}>
            
                <div className="card-header">
                    <h5 className="card-title"> <strong>{customer.FullName}</strong></h5>
                </div>
                <div className="card-body">
                    
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Email: </strong>{customer.Email}</li>
                        <li className="list-group-item"><strong>Phone Number: </strong>{customer.PhoneNumber}</li>
                        <li className="list-group-item"><strong>Shipping Address: </strong>{customer.DefaultShippingAddress}</li>
                        <li className="list-group-item"><strong>Billing Address: </strong>{customer.BillingAddress}</li>
                    </ul>  

                </div>
            
            </div>

        </div>
       
    );
}
export default CustomerDetails;

