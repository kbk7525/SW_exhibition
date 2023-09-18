package project.DoitDoit.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import project.DoitDoit.dto.BoardDTO;
import project.DoitDoit.dto.BoardResDTO;
import project.DoitDoit.service.BoardService;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
public class BoardController {

    private final BoardService boardService;

    @PostMapping("/save")
    public ResponseEntity<Void> save(@RequestBody BoardResDTO dto) {
        boardService.save(dto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
