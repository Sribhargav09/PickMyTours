import { useState } from "react"
const MultiFields = ({ addFieldsToTour, section, fields }) => {

    const [inputFields, setInputFields] = useState(fields);

    const addInputField = () => {
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
        list[index] = { [name]: value };
        console.log(list);
        setInputFields(list);
    }
    return (

        <div className="row">
            <div className="col-sm-10">
                {
                    inputFields && inputFields.map((data, index) => {
                        const { fullName, emailAddress, salary } = data;
                        return (
                            <div className="row" style={{marginBottom:'10px'}} key={index}>

                            <div className="col-10">
                                <div className="row">
                                {fields.map((field) => {
                                    let k = Object.keys(field);
                                    return (<div className="col-6">
                                        <div className="form-group">
                                            <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={inputFields[index][k]} name={k} className="form-control" placeholder={k} />
                                        </div>
                                    </div>)
                                }
                                )}
                                </div>
                            </div>

                                <div className="col-2">
                                    {(inputFields.length !== 1) ? <button  type="button" className="btn btn-outline-danger" onClick={removeInputFields}>-</button> : ''}

                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="col-sm-2">
                <button type="button" className="btn btn-outline-success" onClick={addInputField}>+</button>
            </div>
        </div>

    )
}
export default MultiFields