import styled from "styled-components";

const Home = () => {
    
    return (
        <HomeWrapper>
            <HomeContent>
                <LeftSide>
                    <LeftSideContent>
                        <PlayerInput type="text" placeholder="P1"/>
                        <RoomBtns>
                            <RoomBtn>Create Room</RoomBtn>
                            <RoomBtn>Join Room</RoomBtn>
                        </RoomBtns>
                        <StartGame>Start Game</StartGame>
                    </LeftSideContent>
                </LeftSide>

                <RightSide>
                    <h3>Instructions</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </RightSide>
            </HomeContent>
        </HomeWrapper>
    );
}

const HomeWrapper = styled.div`
    width:100vw;
    padding-top: 50px;
    display:flex;
    justify-content:center;
`

const HomeContent = styled.div`
    width:90%;
    display:flex;
    flex-direction:row;
`
const LeftSide = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   // padding:50px 50px 50px 10px;
`
const LeftSideContent = styled.div`
    width:60%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:left;

`
const PlayerInput = styled.input`
    width:100%;
    min-height:30px;    
`

const RoomBtns = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-top: 10px;
`

const RoomBtn = styled.button`
    background-color:#3E3A31;
    color:white;
    min-width:120px;
    min-height:40px;
    border-radius: 10px;
`

const StartGame = styled.button`
    background-color:#3E3A31;
    color:white;
    max-width:100%;
    min-height:40px;
    border-radius: 10px;
    margin-top: 20px;
`
const RightSide = styled.div`
    max-width:50%;
    display:flex;
    flex-direction: column;
`
export default Home;