package metricasubmit;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import metrica.Metrica;
import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;

@Entity
@Table(name = "metricasubmit")
@Getter @Setter
public  class MetricaSubmit extends CrudClass {

	@ManyToOne
	@JoinColumn(name="metrica_submit_metrica_id")
    @JsonView(Views.Public.class)
	private  Metrica metrica;
	
	 @JsonView(Views.Public.class)
	 private String submitedDate;
	 
	 @JsonView(Views.Public.class)
	 private String value;

}
