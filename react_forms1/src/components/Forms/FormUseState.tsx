const FormUseState = () => {
  return (
    <>
      <h1 className="text-center">Form using UseState</h1>
      <form>
        <div className="mb-3 myContainer">
          <label htmlFor="" className="form-label">Name</label>
          <input  id="name" type="text" className="form-control" />
          <label htmlFor="" className="form-label">Age</label>
          <input  id="Age" type="text" className="form-control" />
          <button className="btn btn-primary" type="submit">sumbit</button>
        </div>
        
      </form>
    </>
  );
};

export default FormUseState;
