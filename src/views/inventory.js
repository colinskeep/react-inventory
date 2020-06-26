import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Inventory(props) {
  const [response, setResponse] = useState('');
  useEffect(() => {
    props.socket.emit('getInventory');
    props.socket.on('inventory', data => {
      const items = data.map(item => (
      <div key={item._id} className="items">
        <div id={item._id} className="item sku"  contenteditable="true" spellCheck="false">{item.sku}</div>
        <div className="item name" contenteditable="true" spellCheck="false" >{item.title}</div>
        <div className="item sku"  contenteditable="true" spellCheck="false">{item.ASIN}</div>
        <div className="item sku"  contenteditable="true" spellCheck="false">{item.ebay}</div>
        <div className="item sku"  contenteditable="true" spellCheck="false">{item.bigcommerce}</div>
        <div className="item quantity"  contenteditable="true" spellCheck="false">{item.quantity}</div>
      </div>
      ))
      setResponse(items);
    })
  }, [])
  return <div className="page">
  <div>
  <Button className="addItem" variant="outline-success">Add Item</Button>
  <Button className="addItem" variant="outline-success">Bulk Import</Button>
  <Form inline className="inventoryForm">
      <fieldset className='options'>
        <Form.Group> 
            <Form.Check
              type="radio"
              label="All"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Active"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Inactive"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form.Group>
      </fieldset>
  </Form>
  </div>
  <div>
  <section className="titleContainer">
    <div className="titles">
      <div className="item sku">
        SKU
      </div>
      <div className="item name">
        Description
      </div>
      <div className="item sku">
        ASIN
      </div>
      <div className="item sku">
        eBay
      </div>
      <div className="item sku">
        BigCommerce
      </div>
      <div className="item quantity">
        Qty
      </div>
    </div>
  </section>
  <section key={response}>{response}</section>
  </div>
  </div>;
}

export default Inventory;