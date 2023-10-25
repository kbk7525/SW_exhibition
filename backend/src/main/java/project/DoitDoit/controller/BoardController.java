package project.DoitDoit.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.DoitDoit.dto.DiaryDTO;
import project.DoitDoit.dto.DiaryResDTO;
import project.DoitDoit.dto.BoardDTO;
import project.DoitDoit.dto.BoardResDTO;
import project.DoitDoit.service.BoardService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@Slf4j
@RequestMapping("/mainpage")
public class BoardController {

    private final BoardService boardService;

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody BoardResDTO dto) {
        boardService.save(dto);
        return ResponseEntity.ok("저장 완료");
    }

    @GetMapping("/print")
    public ResponseEntity<List<BoardDTO>> print() {
        List<BoardDTO> boardDTOList = boardService.findListAll();
        return new ResponseEntity<>(boardDTOList, HttpStatus.OK);
    }

    @PostMapping ("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) {
        boardService.delete(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/calendar/{today}")
    public ResponseEntity<List<BoardDTO>> calendar(@PathVariable String today) {
        List<BoardDTO> boardDTOList = boardService.findDayAll(today);
        return new ResponseEntity<>(boardDTOList, HttpStatus.OK);
    }
    @PostMapping("/diarySave")
    public ResponseEntity<String> diarySave(@RequestBody DiaryResDTO dto) {
        boardService.diarySave(dto);
        return ResponseEntity.ok("일기 저장 완료");
    }

    @GetMapping("/diaryPrint")
    public ResponseEntity<List<DiaryDTO>> diaryPrint() {
        List<DiaryDTO> diaryDTOList = boardService.findDiaryAll();
        System.out.println(diaryDTOList.get(0));
        return new ResponseEntity<>(diaryDTOList, HttpStatus.OK);
    }

    @PostMapping ("/diaryDelete/{dairyId}")
    public ResponseEntity<?> diaryDelete(@PathVariable long dairyId) {
        boardService.diaryDelete(dairyId);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
