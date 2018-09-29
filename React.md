# Learning Notes  of React
## [Front-End Web Development with React](https://www.coursera.org/learn/front-end-react/home/welcome) 
### 1. Full Stack Web Development
 *  [What is a Full Stack developer?](https://www.laurencegellert.com/2012/08/what-is-a-full-stack-developer/)
 *  [Wait, Wait… What is a Full-stack Web Developer After All?](https://edward-designer.com/web/full-stack-web-developer/)
 *  [The Myth of the Full-stack Developer](http://andyshora.com/full-stack-developers.html)
 *  [Multitier architecture](https://en.wikipedia.org/wiki/Multitier_architecture)
 *  [What is the 3-Tier Architecture?](http://www.tonymarston.net/php-mysql/3-tier-architecture.html)
### 2. What is React?
 * A JavaScript library for building user interfaces
 * Declarative
 * Component-based
 * Technology stack agnostic
 * [React is a framework](https://www.sohamkamani.com/blog/2016/11/16/react-is-a-framework/)
 * [An Introduction to the React Framework](https://www.upwork.com/hiring/development/an-introduction-to-the-react-framework/)
 * [Is React library or a framework?](https://develoger.com/is-reactjs-library-or-a-framework-a14786f681a0)
 * [Declarative vs. Imperative Programming for the Web](http://codenugget.co/2015/03/05/declarative-vs-imperative-programming-web.html)
 * [5 Best JavaScript Frameworks in 2017](https://hackernoon.com/5-best-javascript-frameworks-in-2017-7a63b3870282)
 * [Top JavaScript Frameworks & Topics to Learn in 2017](https://medium.com/javascript-scene/top-javascript-frameworks-topics-to-learn-in-2017-700a397b711)
 * [Imperative vs. Declarative Programming - Pros and Cons](https://www.netguru.co/blog/imperative-vs-declarative)
 * [Imperative vs Declarative](http://latentflip.com/imperative-vs-declarative)
### 3. Getting Started with React
 * yarn global add create-react-app@1.5.2 
 * cd ...
 * create-react-app confusion 
 * yarn start
### 4. Configuring React Application
 * yarn add bootstrap@4.0.0
 * yarn add reactstrap@5.0.0  react-popper@0.9.2
### 5. React Element
 * Smallest building blocks of React apps
    `const element = <h1 calssName = "App-title">Welcome to React</h1>;`
 *  Plain JS Object taht are cheap to create
 * Components are made of elements
    `class App extends Component{...}`
 * **classname not class**
 * `ReactDOM.render()`
### 6. Rendering to the DOM
 * Rendered using ReactDOM. See index.js
    `ReactDOM.render(<App />, document.getElementById('root'));`
 * Where is is rendered? index.html
     `<div id="root"></div>`
    Root DOM node
### 7. Introduction to JSX
 * Syntactic extension to JavaScript
 * Shorthand notation to represent JavaScript functions calls that evaluate to JavaScript objects
 * Avoids artificial separation of rendering logic from other UI logic
### 8. React Components Overview
* A component returns a set of React elements that should appear on the screen
* Components enable you to split your UI into independent, reusable pieces
* Components also accept inputs
* Different kinds of components can be defined in React
* User-defined component names must always start with a capital letter
* Tags starting with lowercase letters are treated as DOM tags
* [navbar](https://www.jianshu.com/p/a93a3058ca72)
* Media
### 9. State
*  Each component can store its own local information in its "state"
*  Private and fully controlled by the component
*  Can be passed as props to children
*  Only class components can have local state
*  State declared within the constructor 
* State declared within the constructor:
``` javascript
    class Menu extends Component{
          constructor(props){
              super(props);
                  
              this.state = {
                   selectedDish:null
              }
          }
    }
```
* State should only be modified using setState()
``` 
    onDishSelect(dish){
        this.setState({
            selectedDish:dish
        });
    }
```
* Never do the following:
```
    this.state.selectedDish = dish;
```
### 10. Props
* JSX attributes are passed into a component as a single object
* Available in the component as "peops"
* Can pass in multiple attributes
* Cannot modify props within the component
* Examles:
```
    <Menu dishes = {this.state.dishes}>
    <Dishdetail dish = {this.state.dish} comments = {this.state.comments}>
```
### 11. Handling Events
* Handleing events is similar to the way you handle events on DOM elements: Use camelCase to specify events; Pass function as the events handler
* Example:
`<Card onClick = {() => this.onDishSelect(dish)}>`
### 12. Lists and Keys
* Lists are handled similar to JS
* Example:
```
    const menu = this.props.dishes.map((dish)) =>{
        return(
              <div key={dish.id}>
              <h1>{dish.name}</h1>
              <p>{dish.description}</p>
              </div>
        );
    });
```
* Keys should be ginven to elements inside the array
* Keys identify which items have changed, are added or removed
### 13. Lifting State Up
* Sometimes several components may share the same data
* Changes to data in one component needs to be reflected to another component
* Best to move the shared state to a common ancestor component
### 14. React Component Lifecycle
* React Component goes throngh the following lifecycle stages: Monuting, Updating, Unmounting
* Several lifecycle methods available in each stage
### 15. Mounting Lifecycle Methods
* Called when an instance of a component is being created and inserted into the DOM
```
    Constructor()
    getDerivedStateFromProps()
    render()
    componentDidMount()
```
* An earlier method now deprecated called 
`componentWillMount()`
## [React 入门](https://www.jianshu.com/p/2e89414453be)
### 1. 什么是React
* React 是一个用于构建用户界面的 JAVASCRIPT 库。
* React主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）。
* React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源。
* React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。
* 既可以开发浏览器应用，又可以开发移动应用
### 2. React 特点
 * 声明式设计 −React采用声明范式，可以轻松描述应用。
 * 高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。
 * 灵活 −React可以与已知的库或框架很好地配合。
 * JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。
 * 组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
 * 单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。
### 3. 什么是JSX
React 使用 JSX（JavaScript XML） 来替代常规的 JavaScript。JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。我们不需要一定使用 JSX，但它有以下优点：
* JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
* 它是类型安全的，在编译过程中就能发现错误。
* 使用 JSX 编写模板更加简单快速。
## [React 教程](http://www.runoob.com/react/react-tutorial.html)