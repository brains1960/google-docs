import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
<<<<<<< HEAD
// import io from '../server/index';
const io = require('socket.io-client');

// Components
<<<<<<< HEAD
=======

// Components
import ToolBar from './components/toolbar';
// Custom Styles
import styleMap from './components/stylemap';

// import io from '../server/index';
const io = require('socket.io-client');
>>>>>>> editor-view
=======
// import Doc from './components/doc';
import DocPortal from './components/docPortal';
import Home from './components/home';
>>>>>>> ea8d38d8056fd201ff41a2bc79495cab86957fba

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      fontSize: 34,
      fontColor: 'black',
      textAlignment: 'left',
=======
      home: true
>>>>>>> ea8d38d8056fd201ff41a2bc79495cab86957fba
    };
    this.onChange = editorState => this.setState({ editorState });
    this.handleKeyCommand = () => this.handleKeyCommand;
  }

  componentDidMount() {
    const socket = io('http://127.0.0.1:8080');
    socket.on('connect', () => { console.log('ws connect'); });
    socket.on('disconnect', () => { console.log('ws disconnect'); });
    socket.on('msg', (data) => {
      console.log('ws msg:', data);
      socket.emit('cmd', { foo: 123 });
    });
  }

  // Funtions
  makeEdit(value) {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, value));
  }

  alignEdit(value) {
    this.setState({ align: value });
  }

  toggleBlock(value) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, value));
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  toDoc() {
    this.setState({
      home: !this.state.home
    })
  }

  render() {
      return (<div>
        <button type="button">Back to Documents Portal</button>
        <br />
        <h2>Sample Document</h2>
        <br />
        <p>Shareable Document ID:</p>
        <button type="button">Save Changes</button>
        <div>
          <ToolBar
            edit={value => this.makeEdit(value)}
            alignEdits={value => this.alignEdit(value)}
            blockEdit={value => this.toggleBlock(value)}
          />
        </div>
        <div style={{ border: '1px red solid', textAlign: this.state.align }}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            handleKeyCommand={this.handleKeyCommand}
            customStyleMap={styleMap}
          />
  =======
          {this.state.home ? <Home toDoc={() => this.toDoc()}/> :
            <DocPortal />
          }
>>>>>>> ea8d38d8056fd201ff41a2bc79495cab86957fba
      </div>
    );
  }
}
