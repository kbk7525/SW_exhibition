package project.DoitDoit.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.DoitDoit.dto.BoardDTO;
import project.DoitDoit.dto.BoardResDTO;
import project.DoitDoit.service.BoardService;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@RequestMapping("/mainpage")
public class BoardController {

    private final BoardService boardService;

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody BoardResDTO dto) {
        boardService.save(dto);
        return ResponseEntity.ok("저장 완료");
    }

    @GetMapping()
    public ResponseEntity<String> print(@RequestBody BoardResDTO dto) {
        return ResponseEntity.ok("출력 완료");
    }
}
