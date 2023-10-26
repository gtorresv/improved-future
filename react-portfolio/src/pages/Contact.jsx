
const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <div className="form">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
        <input type="name" className="form-control" id="exampleFormControlInput2" placeholder="enter name" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
      </div>
    </div>
    </div>

  )
}

export default Contact