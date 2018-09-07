package fobia;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class FobiaService extends GenericService<Fobia>   {

    @Autowired
	private FobiaDAO fobiaDAO;
	
	
}
