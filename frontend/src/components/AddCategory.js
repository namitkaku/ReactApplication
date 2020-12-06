import React,{Component} from 'react';

class AddCategory extends Component{
    render(){
        return(
        <section className="content">
          <div className="row">
           <div className="col-md-1"></div>   
            <div className="col-md-9">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Add Category</h3>
                </div>  
                <form>
                  <div className="box-body">
                    <div className="form-group">
                      <label for="category_name">Category Name</label>
                      <input type="text" className="form-control" id="category_name" placeholder="Enter Category Name" />
                    </div>
                    <div className="form-group">
                      <label for="category_image">Category Image</label>
                      <input type="file" className="form-control" id="category_image" />
                    </div>
                    <div className="form-group">
                    <label for="category_image">Select Status</label>
                      <select className="form-control">
                          <option selected disabled>Select Status</option>
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
               </div>
               </div>
              </div>
            </section>
           
        ) 
    }
}
export default AddCategory;