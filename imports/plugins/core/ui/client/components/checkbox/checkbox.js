import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Components, registerComponent } from "@reactioncommerce/reaction-components";

class Checkbox extends PureComponent {
  handleChange = (event) => {
    if (this.props.onChange) {
      const isInputChecked = !this.props.checked;
      this.props.onChange(event, isInputChecked, this.props.name);
    }
  }

  render() {
    return (
      <label>
        <input
          checked={this.props.checked}
          onChange={this.handleChange}
          ref="checkbox"
          type="checkbox"
        />
        <Components.Translation defaultValue={this.props.label} i18nKey={this.props.i18nKeyLabel} />
      </label>
    );
  }
}

Checkbox.defaultProps = {
  checked: false
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  i18nKeyLabel: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
};

registerComponent("Checkbox", Checkbox);

export default Checkbox;
