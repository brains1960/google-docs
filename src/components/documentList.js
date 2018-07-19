import React from 'react';
import { Glyphicon, Button, ButtonGroup } from 'react-bootstrap';


export default class DocumentList extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.documents.map(doc =>
          (<ButtonGroup
            vertical
            onClick={() => this.props.view(doc._id)}
            style={{ marginRight: 20, width: 100 }}
          >
            <Button><Glyphicon glyph="file" /></Button>
            <Button>{doc.title}</Button>
          </ButtonGroup>)
        )}
      </div>

    )
  }
}
