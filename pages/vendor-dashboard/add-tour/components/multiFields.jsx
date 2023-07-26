import { useState } from "react"
function MultiFields({ addFieldsToTour, section, fields }) {

    const [inputFields, setInputFields] = useState(fields);

    const addInputField = () => {
        console.log(fields);
        setInputFields([...inputFields, fields])

        addFieldsToTour(section, inputFields);

    }
    const removeInputFields = (index) => {
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);

        addFieldsToTour(section, inputFields);
    }
    const handleChange = (index, evnt) => {
        const { name, value } = evnt.target;
        console.log(name)
        console.log(value)
        const list = [...inputFields];
        list[index] = {[name]:value};
        console.log(list);
        setInputFields(list);
    }
    return (

        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    {
                        inputFields.map((data, index) => {
                            const { fullName, emailAddress, salary } = data;
                            return (
                                <div className="row my-3" key={index}>

                                    {fields.map((field) => {
                                        let k = Object.keys(field);
                                        return (<div className="col">
                                            <div className="form-group"> 
                                                <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={inputFields[index][k]} name={k} className="form-control" placeholder="write here.." />
                                            </div>
                                        </div>)
                                    }
                    )}


                                    {/* <div className="col">
                                        <input type="email" onChange={(evnt) => handleChange(index, evnt)} value={emailAddress} name="emailAddress" className="form-control" placeholder="Email Address" />
                                    </div>
                                    <div className="col">
                                        <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={salary} name="salary" className="form-control" placeholder="Salary" />
                                    </div> */}
                                    <div className="col">



                                        {(inputFields.length !== 1) ? <button className="btn btn-outline-danger" onClick={removeInputFields}>Remove</button> : ''}


                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="row">
                        <div className="col-sm-12">

                            <button className="btn btn-outline-success " onClick={addInputField}>Add New</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">

            </div>
        </div>

    )
}
export default MultiFields