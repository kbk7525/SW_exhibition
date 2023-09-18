package project.DoitDoit.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.DoitDoit.dto.BoardDTO;
import project.DoitDoit.entity.BoardEntity;
import project.DoitDoit.repository.BoardRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    //글쓰기
    public void boardSave(BoardDTO boardDTO) {
        BoardEntity boardEntity = BoardEntity.toBoardEntity(boardDTO);
        boardRepository.save(boardEntity);
    }

    public List<BoardDTO> findAll() {
        List<BoardEntity> boardEntityList = boardRepository.findAll();
        List<BoardDTO> boardDTOList = new ArrayList<>();
        for(BoardEntity boardEntity : boardEntityList) {
            boardDTOList.add(BoardDTO.toBoardDTO((boardEntity)));
        }
        return boardDTOList;
    }

    public List<BoardDTO> findByFavorites() {
        List<BoardEntity> boardEntityList = boardRepository.findAll();
        List<BoardDTO> boardDTOList = new ArrayList<>();
        for(BoardEntity boardEntity : boardEntityList) {
            if(boardEntity.getFavorites().equals("true")){
            boardDTOList.add(BoardDTO.toBoardDTO((boardEntity)));
            }
        }
        return boardDTOList;
    }

    public void delete(Long board_id) {
        boardRepository.deleteById(board_id);
    }
}
