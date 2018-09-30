import React, { Component } from 'react';
import { NoteConsumer } from './NoteProvider';
// import ToggleDrawer from './ToggleDrawer';
import Form from './styles/Form';
import FancyButton from './styles/FancyButton';
import CreateNoteDropDown from './styles/CreateNoteDropdown';

class CreateNote extends Component {
  state = {
    title: '',
    content: '',
  }

  saveToState = event => this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (event, saveNote) => {
    event.preventDefault();
    saveNote(this.state);
  }

  render () {
    return (
      <NoteConsumer>
        {({ state, toggleDrawer, saveNote }) => {
          const { content, title } = this.state;
          return (
            <CreateNoteDropDown open={state.drawerOpen}>
              <Form onSubmit={e => this.handleSubmit(e, saveNote)}>
                <label htmlFor="title">
                  <input
                    value={title}
                    onChange={this.saveToState}
                    required
                    type="text"
                    name="title"
                    id="title"
                  />
                </label>
                <label htmlFor="content">
                  <textarea
                    value={content}
                    onChange={this.saveToState}
                    required
                    type="text"
                    name="content"
                    id="content"
                  />
                </label>
                <FancyButton type="submit">Save Note</FancyButton>
                <FancyButton onClick={toggleDrawer}>Toggle</FancyButton>
              </Form>
            </CreateNoteDropDown>
          )
        }}
      </NoteConsumer>
    );
  }
}

export default CreateNote;
