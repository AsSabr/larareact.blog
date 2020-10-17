import React from 'react';
import Breadcrumb from '../../partials/Breadcrumb';
class Edit extends React.Component
{
    render()
    {
        return (
            <div className="content-wrapper">
                <Breadcrumb/>
                <section className="content">
                    edit posts
                </section>
            </div>
        );
    }
}
export default Edit;
