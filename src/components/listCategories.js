import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListCategories extends Component {
    render() {
        const selected = (this.props.optionSelected) ? this.props.optionSelected : '' ;
        return (
            <div className="o-form-element">
                <label className="c-label">Category:
                    <select className="c-field" name="category" defaultValue={ selected }>
                        { this.props.categories.listCategories.map( (category, i) => (
                            <option value={category.name} key={i}>{category.name}</option>
                        ))}
                    </select>
                </label>
            </div>
        );
    }
};

function mapStateToProps ({ categories }) {
    return {
        categories
    }
}

export default connect(
    mapStateToProps
)(ListCategories)
