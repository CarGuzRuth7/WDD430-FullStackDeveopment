import LikeButton from './like-button';

// [<html>
//   <body>
//     <div id="app"></div>
//     <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
//     <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

//     <!-- Imperative JS code -->
//     <!-- <script type="text/javascript">
//       const app = document.getElementById('app');
//       const header = document.createElement('h1');
//       const text = 'Develop. Preview. Ship.';
//       const headerContent = document.createTextNode(text);
//       header.appendChild(headerContent);
//       app.appendChild(header);
//     </script> -->
    
//     <!-- Declarative React code -->
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
//     <script type="text/jsx">
//       const app = document.getElementById('app');

//       //function Header(props) {
//       //  console.log(props); // { title: "React" }
//       //  return <h1>Develop. Preview. Ship.</h1>;
//       //}
//       // Object Destructuring 
//       //You can add any JavaScript expression (something that evaluates to a single value) inside curly braces.
//       function Header({ title }) {
//         console.log(title); //React
//         return <h1>{title}</h1>;
//       }
      
//       function HomePage() {
//         const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

//         //Handling Events
//         function handleClick() {
//           //console.log("increment like count") //log output increases
//           setLikes(likes + 1);
//         }

//         //States and hooks
//         //useState() It returns an array.use those array values inside your component using array destructuring
//         //[state value, update value] = useState(initial value)
//         const [likes, setLikes] = React.useState(0); 

//         return (
//         //<div>
//         //  {/* Nesting the Header component */}
//         //  <Header title="React"/>
//         //  <Header title="A new title" />
//         //</div>

//         <div>
//           <Header title="Develop. Preview. Ship." />
//           <ul>
//             {names.map((name) => (
//               <li key={name}>{name}</li>
//             ))}
//           </ul>

          
//           <button onClick={handleClick}>Likes ({likes})</button> 
          
//         </div>
//         );
//       }
      
//       const root = ReactDOM.createRoot(app);
//       root.render(<HomePage />);
//     </script>
//   </body>
// </html>
// ]


 
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
        <LikeButton/>
      
    </div>
  );
}