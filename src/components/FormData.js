const obj={
  "section1": {
    "title": "This is section1",
    "fields": [{ "label": "Name", "type": "text", "placeholder":"Annie Smith" }],
    "component": ()=>{
      console.log('hiiiiii');
      return(
      <p style={{color:'black'}}> Hello How kdhhkd </p>)}
  },
  "section2": {
    "title": "This is section2",
    "fields": [{ "label": "Email", "type": "email","placeholder":"...@domain.com" }]
  },
  "section3": {
    "title": "This is section3",
    "fields": [{ "label": "Add", "type": "text", "placeholder":"Address"}, {
           
        "label": "Phone No",
        "type": "text",
        "fieldName":"phone",
        "required":true,
        "placeholder":"Annie Smith"
    },
    {
        
        "label": "Password",
        "type": "password",
        "fieldName":"name",
        "required":true,
        "placeholder":"Annie Smith"
    }]
  }
}
export default obj;
