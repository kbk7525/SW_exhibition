package project.DoitDoit.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.DoitDoit.dto.BoardDTO;
import project.DoitDoit.dto.BoardResDTO;
import project.DoitDoit.entity.BoardEntity;
import project.DoitDoit.repository.BoardRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    //글쓰기
    public void save(BoardResDTO boardResDTO) {
        BoardEntity boardEntity = boardResDTO.toEntity();
        boardRepository.save(boardEntity);
    }

    public List<BoardDTO> findListAll() {
        BoardDTO boardDTO = new BoardDTO();
        List<BoardEntity> boardEntities = boardRepository.findAll();
        List<BoardDTO> boardDTOList = new ArrayList<>();
        for(BoardEntity boardEntity : boardEntities) {
            boardDTOList.add(boardDTO.toDTO(boardEntity));
        }
        return boardDTOList;
    }
}
