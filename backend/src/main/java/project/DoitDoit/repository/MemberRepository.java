package project.DoitDoit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.DoitDoit.entity.MemberEntity;

@Repository
public interface MemberRepository extends JpaRepository<MemberEntity, Long> {
    MemberEntity findByUserId(String userId);
}
