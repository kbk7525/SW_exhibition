package project.DoitDoit.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.DoitDoit.dto.BoardDTO;
import project.DoitDoit.dto.BoardResDTO;
import project.DoitDoit.entity.BoardEntity;
import project.DoitDoit.repository.BoardRepository;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    //글쓰기
    public void save(BoardResDTO boardResDTO) {
        BoardEntity boardEntity = BoardEntity.builder()
                .title(boardResDTO.getTitle())
                .content(boardResDTO.getContent())
                .dDay(boardResDTO.getDDay())
                .build();
        boardRepository.save(boardEntity);
    }
}
