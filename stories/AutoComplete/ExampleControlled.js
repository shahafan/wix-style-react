import React from 'react';
import AutoComplete from 'wix-style-react/AutoComplete';

const style = {
  display: 'inline-block',
  padding: '0 5px 0',
  width: '200px',
  lineHeight: '22px'
};

const options = [
  {id: 0, value: 'First option'},
  {id: 1, value: 'Second option'},
  {id: 2, value: 'Third option'},
  {id: 3, value: 'Fifth option'},
  {id: 4, value: 'Fourth option'}
];

class ControlledAutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', value2: ''};
    this.onSelectFor = this.onSelectFor.bind(this);
    this.onChangeFor = this.onChangeFor.bind(this);
    this.submit = this.submit.bind(this);
  }

  onSelectFor(property) {
    return option => this.setState({[property]: option.value});
  }

  onChangeFor(property) {
    return event => this.setState({[property]: event.target.value});
  }

  submit(e) {
    e.preventDefault();
    alert('submitted');
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div style={style} className="ltr">
          <b>* Must enter field </b>
          <AutoComplete
            dataHook="story-autocomplete"
            autocomplete="off"
            options={options}
            value={this.state.value}
            onChange={this.onChangeFor('value')}
            onSelect={this.onSelectFor('value')}
            required
            placeholder={'Start typing'}
            tabIndex={-1}
            predicate={option => option.value.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1}
            />
        </div>
        <div style={style} className="ltr">
          No native auto complete
          <AutoComplete
            dataHook="story-autocomplete-2"
            autocomplete="off"
            options={options}
            tabIndex={-1}
            value={this.state.value2}
            onChange={this.onChangeFor('value2')}
            onSelect={this.onSelectFor('value2')}
            placeholder={'Start typing'}
            predicate={option => option.value.toLowerCase().indexOf(this.state.value2.toLowerCase()) !== -1}
            />
        </div>
        <button type="submit">Try to submit</button>
      </form>
    );
  }
}

export default () =>
  <div>
    <h3>Tab to next field (A11y)</h3>
    <ControlledAutoComplete/>
  </div>;
