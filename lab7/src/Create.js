import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('laptop');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { title, description, category };

    fetch('http://localhost:8000/products/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Product title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Product description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        ></textarea>
        <label>Product category:</label>
        <select
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        >
          <option value="laptop">laptop</option>
          <option value="book">book</option>
        </select>
        <button>Add Product</button>
      </form>
    </div>
  );
}
 
export default Create;