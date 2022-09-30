import React from 'react'
import { marked } from "marked"
import './App.css'

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      markdown: placeholder
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      markdown: e.target.value
    });
  }

  render(){
    return(<main className="flex">
      <Editor markdown={this.state.markdown} onChange={this.handleChange} />
      <Preview markdown={this.state.markdown} />
    </main>);
  }
}


function Editor(props){
  return (<div id="editorWrap">
    <Header name="Editor"/>
    <textarea
      rows="15"
      cols="60"
      id="editor"
      className="flex"
      onChange={props.onChange}
      type="text"
      value={props.markdown}
    />
    </div>
  );
};

function Preview (props){
  return (<div id="previewWrap">
    <Header name="Previewer"/>
  <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.markdown, { renderer: renderer }) }}>
      </div>
  </div>);
}


function Header(props){
  return <h2 className='header'>{props.name}</h2>;
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

![coding](https://media.tenor.com/GfSX-u7VGM4AAAAC/coding.gif)`;