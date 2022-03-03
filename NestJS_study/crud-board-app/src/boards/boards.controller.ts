import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService){}

    @Get()
    getAllBoard(): Board[] {
        // Service에서 요청 처리
        return this.boardsService.getAllBoards();
    }

    @Post()
    createBoard(
        // express js에서 req.body에 해당하는 부분
        /*@Body('title') title: string,
        @Body('description') description: string*/
        @Body() createBoardDto: CreateBoardDto

    ): Board {
        return this.boardsService.createBoard(createBoardDto);
    }
}
