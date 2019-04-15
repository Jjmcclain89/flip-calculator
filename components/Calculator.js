import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
// import CalculatorResults from "./CalculatorResults";

function Calculator(props) {
    const [resultsVisible, setResultsVisible] = useState(false);
    const [purchasePrice, setPurchasePrice] = useState();
    const [repairCosts, setRepairCosts] = useState();
    const [governmentCosts, setGovernmentCosts] = useState();
    const [miscCosts, setMiscCosts] = useState();
    const [laborPrice, setLaborPrice] = useState();
    const [laborHrs, setLaborHrs] = useState();
    const [desiredROI, setDesiredROI] = useState();
    const [totalCapitalInvestment, setTotalCapitalInvestment] = useState();
    const [estSellPrice, setEstSellPrice] = useState();
    const [totalLaborCosts, setTotalLaborCosts] = useState();
    const [totalExpenses, setTotalExpenses] = useState();
    const [profit, setProfit] = useState();
    const [ROI, setROI] = useState();
    const [isGoodBuy, setIsGoodBuy] = useState();
    

    function calculate() {
        let totalCapInvest =
            purchasePrice + repairCosts + governmentCosts + miscCosts,
            totalLabor = laborHrs * laborPrice,
            totalExp = totalCapInvest + totalLabor,
            netProfit = estSellPrice - totalExp,
            realizedROI = (netProfit / totalExp) * 100;
        setTotalCapitalInvestment(totalCapInvest);
        setTotalLaborCosts(totalLabor);
        setTotalExpenses(totalExp);
        setProfit(netProfit);
        setROI(realizedROI);
        setIsGoodBuy(realizedROI > desiredROI ? true : false);
    }

    function handleSubmit(e) {
        calculate();
        setResultsVisible(true);
    }

    return (
        <React.Fragment>
            <Card>
                <Card.Body>
                    <Form>
                        <label htmlFor="purchasePrice">Purchase Price</label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type="number"
                                value={purchasePrice}
                                onChange={e =>
                                    setPurchasePrice(parseFloat(e.target.value))
                                }
                                id="purchasePrice"
                                aria-label="purchasePrice"
                                placeholder="Principle Investment"
                            />
                        </InputGroup>

                        <label htmlFor="repairCosts">
                            Estimated Repair Costs
                        </label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type="number"
                                value={repairCosts}
                                onChange={e =>
                                    setRepairCosts(parseFloat(e.target.value))
                                }
                                id="repairCosts"
                                aria-label="repairCosts"
                                placeholder="Repairs"
                            />
                        </InputGroup>

                        <label htmlFor="governmentCosts">
                            Government Costs
                        </label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type="number"
                                value={governmentCosts}
                                onChange={e =>
                                    setGovernmentCosts(
                                        parseFloat(e.target.value)
                                    )
                                }
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
                                type="number"
                                value={miscCosts}
                                onChange={e =>
                                    setMiscCosts(parseFloat(e.target.value))
                                }
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
                                type="number"
                                value={laborPrice}
                                onChange={e =>
                                    setLaborPrice(parseFloat(e.target.value))
                                }
                                id="laborPrice"
                                aria-label="laborPrice"
                                placeholder="per hour"
                            />
                            <InputGroup.Prepend>
                                <InputGroup.Text># Hrs</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type="number"
                                value={laborHrs}
                                onChange={e =>
                                    setLaborHrs(parseFloat(e.target.value))
                                }
                                id="laborHrs"
                                aria-label="LaborHours"
                                placeholder=""
                            />
                        </InputGroup>

                        <Row>
                            <Col xs={4}>
                                <label htmlFor="desiredROI">Desired ROI</label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>%</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        type="number"
                                        value={desiredROI}
                                        onChange={e =>
                                            setDesiredROI(
                                                parseFloat(e.target.value)
                                            )
                                        }
                                        id="desiredROI"
                                        aria-label="desiredROI"
                                        placeholder=""
                                    />
                                </InputGroup>
                            </Col>
                            <Col xs={8}>
                                <label htmlFor="estSellPrice">
                                    Estimated Sell Price
                                </label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>$</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        type="number"
                                        value={estSellPrice}
                                        onChange={e =>
                                            setEstSellPrice(
                                                parseFloat(e.target.value)
                                            )
                                        }
                                        id="estSellPrice"
                                        aria-label="estSellPrice"
                                        placeholder=""
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Button
                            className="float-right"
                            variant="primary"
                            onClick={handleSubmit}>
                            Calculate!
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

            <Card className={resultsVisible ? "" : "d-none"}>
                <Card.Body>
                    <p>Total Capital Investment: ${totalCapitalInvestment}</p>
                    <p>Total Labor Costs: ${totalLaborCosts}</p>
                    <p>Total Expenses: ${totalExpenses}</p>
                    <p>Profit: ${profit}</p>
                    <p>Return on Investment: {ROI ? ROI.toFixed(2) : ""}%</p>
                    <p>{isGoodBuy ? "You should buy!" : "Bad deal"}</p>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default Calculator;
