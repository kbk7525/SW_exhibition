package project.DoitDoit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.DoitDoit.entity.BoardEntity;

import java.util.List;

public interface BoardRepository extends JpaRepository<BoardEntity, Long>{
    List<BoardEntity> findByToday(String today);
}
