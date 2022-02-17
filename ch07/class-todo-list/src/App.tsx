import React, { Component } from 'react'
import Styled from 'styled-components'
import type{ IScriptSnapshot } from 'typescript'

import { Button, Input, ToDoItem } from 'Components'

const Container = Styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Contents = Styled.div`
  display: flex;
  background-color: #FFFFFF;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
`

const InputContainer = Styled.div`
  display: flex;
`

const ToDoListContainer = Styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #BDBDBD;
  margin-bottom: 20px;
`
interface Props {}

interface State {
  readonly toDo:string
  readonly toDoList:string[]
  readonly error:boolean
}

class App extends Component<Props, State> {

  /* class component이므로 생성자 존재. 1번만 실행 */
  constructor(props:Props) {
    super(props);

    //State는 immutable
    //생성자에서 state 초기화 가능
    this.state = {
      toDo:'',
      toDoList: [],
      error:false,
    }
  }

  private addToDo = (): void => {
    const { toDo, toDoList } = this.state

    if (toDo) {
      /*
      * setter를 통해 State 초기화 가능
      * class Component에서는 setState 만 사용 (메서드명 바꾸기 X)
      * */
      this.setState({
        toDo: '',
        toDoList: [...toDoList, toDo],
      })
    }
  }

  private deleteToDo = (index:number):void => {
    let list = [...this.state.toDoList]
    list.splice(index, 1)
    this.setState({
      toDoList: list
    })
  }

  /**
   * 부모 컴포넌트로부터 받는 Props가 변경될 때
   * this.setState에 의해 State가 변경될 때
   * !render에서 setState 사용 하면 무한루프 빠질 수 있는데, onClick에만 달아주면 ㄱㅊ
   * */
  render() {

    const { toDo, toDoList, error } = this.state

    return(
        <Container>
          {
            !error && (
                  <Contents>
                    <ToDoListContainer data-testid={"toDoList"}>
                      {toDoList.map( (item, idx) => {
                        <ToDoItem label={item} key={item} onDelete={() => this.deleteToDo(idx)}/>
                      })}
                    </ToDoListContainer>
                    <InputContainer>
                      <Input
                          placeholder={"할 일을 입력해주세요 :)"}
                          value={toDo}
                          onChange={(text) => this.setState({toDo: text})}
                      />
                      <Button label={"추가"} onClick={this.addToDo}/>
                    </InputContainer>
                  </Contents>
              )
          }
        </Container>
    )
  }

  /**
   * 부모로부터 받은 Props와 State를 동기화할 때 사용.
   * 동기화할 필요 없으면 null 반환
   * Props가 변경될 때마다 호출
   * */
  // static getDerivedStateFromProps(nextProps: Props, prevState: State) {
  //   console.log('getDerivedStateFromProps')
  //
  //   return null
  // }
  //
  // /**
  //  * 컴포넌트가 '처음' 화면에 표시된 이후 호출
  //  * render() -> didMount()
  //  * 1회만 호출
  //  * */
  // componentDidMount() {
  //   console.log('componentDidMount')
  // }
  //
  // /**
  //  * render() 직후 호출
  //  * */
  // getSnapshotBeforeUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): any {
  //   console.log('getSnapshotBeforeUpdate')
  //
  //   return {
  //     testData: true,
  //   }
  // }
  //
  // componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
  //   console.log('componentDidUpdate')
  // }
  //
  // /**
  //  * Props 변경, State 변경 시 호출
  //  * 값이 변경되었으나, 다시 화면을 그리고 싶지 않을 때 사용 (Return false)
  //  * */
  // shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
  //   console.log('shouldComponentUpdate')
  //   return true
  // }
  //
  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  // }
  //
  // componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  //   this.setState({
  //     error: true,
  //   })
  // }
}

export default App