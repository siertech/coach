package relatorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class RelatorioService extends GenericService<Relatorio>   {

    @Autowired
	private RelatorioDAO relatorioDAO;
	
	
}
