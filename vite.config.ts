import { defineConfig } from  "vite" ; 
import react from  "@vitejs/plugin-react" ; 
import path from "path"

// https://vitejs.dev/config/ 
export  default  defineConfig ({ 
  plugins : [ 
    react (), 
    
     { 
      name : "markdown-loader" , 
      transform ( code, id ) { 
        if (id. slice (- 3 ) === ".md" ) { 

          return  `export default ${ JSON .stringify(code)} ;` ; 
        } 
      } 
    } 
  ] ,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});