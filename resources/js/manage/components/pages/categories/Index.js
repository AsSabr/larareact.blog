import React from 'react';
import { connect } from 'react-redux';

import Breadcrumb from '../../partials/Breadcrumb';
import { listCategories, setCategoryDefaults } from "../../../store/actions/CategoryActions";
import Spinner from "../../partials/Spinner";
import Row from "./Row";
import { Link } from "react-router-dom";
import Pagination from "../../partials/Pagination";
import SuccessAlert from "../../partials/SuccessAlert";
import ErrorAlert from "../../partials/ErrorAlert";

class Index extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    componentDidMount() {
        this.props.setCategoryDefaults();
        this.props.listCategories(1);
    }
    render()
    {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Categories
                    </h1>
                    <Breadcrumb />
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header">
                                    <h3 className="box-title">All categories</h3>
                                    <Link to='/categories/add' className="btn btn-primary pull-right">Add <i className="fa fa-plus"></i></Link>
                                </div>
                                <div className="box-body">
                                    <Spinner show={this.props.categories.list_spinner}/>
                                    <SuccessAlert msg={this.props.categories.success_message}/>
                                    <ErrorAlert msg={this.props.categories.error_message}/>
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Title</th>
                                            <th>Slug</th>
                                            <th width="15%">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            this.props.categories.categories.data?(
                                                this.props.categories.categories.data.map(item => <Row key={item.id} category={item} />)
                                            ):null
                                        }
                                        </tbody>
                                    </table>
                                </div>
                                <Pagination data={this.props.categories.categories} onclick={this.props.listCategories.bind(this)} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.category
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        listCategories: (page) => dispatch(listCategories(page)),
        setCategoryDefaults: () => dispatch(setCategoryDefaults())
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Index);
