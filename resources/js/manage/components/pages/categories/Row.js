import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCategory } from "../../../store/actions/CategoryActions";

class Row extends React.Component {
    constructor(props)
    {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(e) {
        e.preventDefault();
        if(confirm("Are you sure?")) {
            this.props.deleteCategory(this.props.category.id);
        }
    }
    render()
    {
        return (
            <tr>
                <td>{this.props.category.id}</td>
                <td>{this.props.category.title}</td>
                <td>
                    {this.props.category.slug}
                </td>
                <td>
                    <Link to={'/categories/edit/' + this.props.category.id} className="btn btn-info btn-sm"><i
                        className="fa fa-edit"></i></Link>
                    <a href="#" className="btn btn-danger btn-sm" onClick={this.handleDelete}><i
                        className="fa fa-remove"></i></a>
                </td>
            </tr>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCategory: (id) => dispatch(deleteCategory(id))
    }
};

export default connect(null, mapDispatchToProps) (Row);
