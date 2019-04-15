import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";


function CalculatorInputs(props) {
    return (
        <React.Fragment>
            <label htmlFor="purchasePrice">Purchase Price</label>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    value={purchasePrice}
                    id="purchasePrice"
                    aria-label="purchasePrice"
                    placeholder="Principle Investment"
                />
            </InputGroup>

            <label htmlFor="repairCosts">Estimated Repair Costs</label>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    id="repairCosts"
                    aria-label="repairCosts"
                    placeholder="Repairs"
                />
            </InputGroup>

            <label htmlFor="governmentCosts">Government Costs</label>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    id="governmentCosts"
                    aria-label="governmentCosts"
                    placeholder="Tax, Title, License"
                />
            </InputGroup>

            <label htmlFor="miscCosts">Misc. Costs</label>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    id="miscCosts"
                    aria-label="miscCosts"
                    placeholder="Fuel, etc."
                />
            </InputGroup>

            <label htmlFor="laborPrice">Labor Cost</label>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    id="laborPrice"
                    aria-label="laborPrice"
                    placeholder="per hour"
                />
                <InputGroup.Prepend>
                    <InputGroup.Text># Hrs</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    id="laborHrs"
                    aria-label="LaborHours"
                    placeholder=""
                />
            </InputGroup>
        </React.Fragment>
    );
}

export default CalculatorInputs;
