import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';


// uuid 모듈을 이용하여 유니크한 id값 전달 (v1 버전 사용)
import { v1 as uuid} from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];  // 다른 컴포넌트에서 배열을 수정하지 못하게 private으로 지정

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(createBoardDto: CreateBoardDto) {
        const {title, description} = createBoardDto;
        const board: Board = {
            id: uuid(), // unique한 id 
            title,
            description,
            status: BoardStatus.PUBLIC,
        }

        this.boards.push(board);
        return board;
    }
}
