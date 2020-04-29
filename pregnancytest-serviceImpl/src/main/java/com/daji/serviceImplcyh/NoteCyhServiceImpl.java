package com.daji.serviceImplcyh;

import com.daji.daocyh.NoteCyhMapper;
import com.daji.pojo.Note;
import com.daji.servicecyh.NoteCyhService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoteCyhServiceImpl implements NoteCyhService {
    @Autowired
    private NoteCyhMapper noteCyhMapper;
    public int addNote(Note note) {
        return noteCyhMapper.insert(note);
    }
}
