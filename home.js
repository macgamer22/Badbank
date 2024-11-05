function Home(){
  return (
    <Card
      bgcolor="danger"
      txtcolor="white"
      header="BadBank Home Page"
      title="Welcome to Shady Bank!"
      text="Please bank at your own risk."
      body={(<img src="bank.png" 
      className="img-fluid" 
      alt="Responsive image" />)}
    />    
  );  
}
