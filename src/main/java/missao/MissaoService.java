package missao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class MissaoService extends GenericService<Missao>   {

    @Autowired
	private MissaoDAO missaoDAO;
	
	
}
