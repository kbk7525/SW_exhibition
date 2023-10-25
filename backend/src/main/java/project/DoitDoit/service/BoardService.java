package project.DoitDoit.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.DoitDoit.dto.DiaryDTO;
import project.DoitDoit.dto.DiaryResDTO;
import project.DoitDoit.dto.BoardDTO;
import project.DoitDoit.dto.BoardResDTO;
import project.DoitDoit.entity.BoardEntity;
import project.DoitDoit.entity.DiaryEntity;
import project.DoitDoit.repository.BoardRepository;
import project.DoitDoit.repository.DiaryRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;
    private final DiaryRepository diaryRepository;

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

    public List<BoardDTO> findDayAll(String today) {
        BoardDTO boardDTO = new BoardDTO();
        List<BoardEntity> boardEntities = boardRepository.findByToday(today);
        List<BoardDTO> boardDTOList = new ArrayList<>();
        for(BoardEntity boardEntity : boardEntities) {
            boardDTOList.add(boardDTO.toDTO(boardEntity));
        }
        return boardDTOList;
    }
    public void delete(Long id) {
        boardRepository.deleteById(id);
    }

    public void diarySave(DiaryResDTO diaryResDTO) {
        DiaryEntity diaryEntity = diaryResDTO.toEntity();
        diaryRepository.save(diaryEntity);
    }

    public List<DiaryDTO> findDiaryAll() {
        DiaryDTO diaryDTO = new DiaryDTO();
        List<DiaryEntity> diaryEntities = diaryRepository.findAll();
        List<DiaryDTO> diaryDTOList = new ArrayList<>();
        for(DiaryEntity diaryEntity : diaryEntities) {
            diaryDTOList.add(diaryDTO.toDTO(diaryEntity));
        }
        return diaryDTOList;
    }

    public void diaryDelete(Long id) {
        diaryRepository.deleteById(id);
    }
}
