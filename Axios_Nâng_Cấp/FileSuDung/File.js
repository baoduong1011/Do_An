import { courseService } from "../Service"



let handle = () => {
    let promise = Axios({
        url:'',
        method:''
    })

    promise.then(...)
}

let handle2 = () => {
  let promise = courseService.signUp(data);
}